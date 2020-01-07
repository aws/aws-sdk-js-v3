import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DescribeHsmRequest, DescribeHsmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHsmCommandInput = DescribeHsmRequest;
export declare type DescribeHsmCommandOutput = DescribeHsmResponse & __MetadataBearer;
export declare class DescribeHsmCommand extends $Command<DescribeHsmCommandInput, DescribeHsmCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: DescribeHsmCommandInput;
    constructor(input: DescribeHsmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHsmCommandInput, DescribeHsmCommandOutput>;
    private serialize;
    private deserialize;
}
