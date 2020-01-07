import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAvailablePatchesCommandInput = DescribeAvailablePatchesRequest;
export declare type DescribeAvailablePatchesCommandOutput = DescribeAvailablePatchesResult & __MetadataBearer;
export declare class DescribeAvailablePatchesCommand extends $Command<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAvailablePatchesCommandInput;
    constructor(input: DescribeAvailablePatchesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput>;
    private serialize;
    private deserialize;
}
