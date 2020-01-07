import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProtectionCommandInput = DescribeProtectionRequest;
export declare type DescribeProtectionCommandOutput = DescribeProtectionResponse & __MetadataBearer;
export declare class DescribeProtectionCommand extends $Command<DescribeProtectionCommandInput, DescribeProtectionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeProtectionCommandInput;
    constructor(input: DescribeProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProtectionCommandInput, DescribeProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
