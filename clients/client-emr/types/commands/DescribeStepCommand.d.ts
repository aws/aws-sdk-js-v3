import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeStepInput, DescribeStepOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStepCommandInput = DescribeStepInput;
export declare type DescribeStepCommandOutput = DescribeStepOutput & __MetadataBearer;
export declare class DescribeStepCommand extends $Command<DescribeStepCommandInput, DescribeStepCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeStepCommandInput;
    constructor(input: DescribeStepCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStepCommandInput, DescribeStepCommandOutput>;
    private serialize;
    private deserialize;
}
