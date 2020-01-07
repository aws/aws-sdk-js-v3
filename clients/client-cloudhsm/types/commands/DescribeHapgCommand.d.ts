import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DescribeHapgRequest, DescribeHapgResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHapgCommandInput = DescribeHapgRequest;
export declare type DescribeHapgCommandOutput = DescribeHapgResponse & __MetadataBearer;
export declare class DescribeHapgCommand extends $Command<DescribeHapgCommandInput, DescribeHapgCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: DescribeHapgCommandInput;
    constructor(input: DescribeHapgCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHapgCommandInput, DescribeHapgCommandOutput>;
    private serialize;
    private deserialize;
}
