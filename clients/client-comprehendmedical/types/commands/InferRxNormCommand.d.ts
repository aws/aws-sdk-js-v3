import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { InferRxNormRequest, InferRxNormResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InferRxNormCommandInput = InferRxNormRequest;
export declare type InferRxNormCommandOutput = InferRxNormResponse & __MetadataBearer;
export declare class InferRxNormCommand extends $Command<InferRxNormCommandInput, InferRxNormCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: InferRxNormCommandInput;
    constructor(input: InferRxNormCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InferRxNormCommandInput, InferRxNormCommandOutput>;
    private serialize;
    private deserialize;
}
