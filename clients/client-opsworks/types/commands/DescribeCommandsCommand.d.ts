import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeCommandsRequest, DescribeCommandsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCommandsCommandInput = DescribeCommandsRequest;
export declare type DescribeCommandsCommandOutput = DescribeCommandsResult & __MetadataBearer;
export declare class DescribeCommandsCommand extends $Command<DescribeCommandsCommandInput, DescribeCommandsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeCommandsCommandInput;
    constructor(input: DescribeCommandsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCommandsCommandInput, DescribeCommandsCommandOutput>;
    private serialize;
    private deserialize;
}
