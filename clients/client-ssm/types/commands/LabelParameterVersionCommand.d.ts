import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type LabelParameterVersionCommandInput = LabelParameterVersionRequest;
export declare type LabelParameterVersionCommandOutput = LabelParameterVersionResult & __MetadataBearer;
export declare class LabelParameterVersionCommand extends $Command<LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput, SSMClientResolvedConfig> {
    readonly input: LabelParameterVersionCommandInput;
    constructor(input: LabelParameterVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput>;
    private serialize;
    private deserialize;
}
