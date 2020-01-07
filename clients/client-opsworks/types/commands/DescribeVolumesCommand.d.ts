import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVolumesCommandInput = DescribeVolumesRequest;
export declare type DescribeVolumesCommandOutput = DescribeVolumesResult & __MetadataBearer;
export declare class DescribeVolumesCommand extends $Command<DescribeVolumesCommandInput, DescribeVolumesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeVolumesCommandInput;
    constructor(input: DescribeVolumesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumesCommandInput, DescribeVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
