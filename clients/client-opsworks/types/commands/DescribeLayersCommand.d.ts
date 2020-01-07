import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeLayersRequest, DescribeLayersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLayersCommandInput = DescribeLayersRequest;
export declare type DescribeLayersCommandOutput = DescribeLayersResult & __MetadataBearer;
export declare class DescribeLayersCommand extends $Command<DescribeLayersCommandInput, DescribeLayersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeLayersCommandInput;
    constructor(input: DescribeLayersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLayersCommandInput, DescribeLayersCommandOutput>;
    private serialize;
    private deserialize;
}
