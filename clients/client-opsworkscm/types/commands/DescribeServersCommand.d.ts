import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeServersRequest, DescribeServersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServersCommandInput = DescribeServersRequest;
export declare type DescribeServersCommandOutput = DescribeServersResponse & __MetadataBearer;
export declare class DescribeServersCommand extends $Command<DescribeServersCommandInput, DescribeServersCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DescribeServersCommandInput;
    constructor(input: DescribeServersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServersCommandInput, DescribeServersCommandOutput>;
    private serialize;
    private deserialize;
}
