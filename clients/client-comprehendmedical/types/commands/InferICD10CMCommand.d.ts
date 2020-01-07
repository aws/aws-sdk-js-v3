import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { InferICD10CMRequest, InferICD10CMResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InferICD10CMCommandInput = InferICD10CMRequest;
export declare type InferICD10CMCommandOutput = InferICD10CMResponse & __MetadataBearer;
export declare class InferICD10CMCommand extends $Command<InferICD10CMCommandInput, InferICD10CMCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: InferICD10CMCommandInput;
    constructor(input: InferICD10CMCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InferICD10CMCommandInput, InferICD10CMCommandOutput>;
    private serialize;
    private deserialize;
}
