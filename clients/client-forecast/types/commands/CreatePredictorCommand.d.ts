import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { CreatePredictorRequest, CreatePredictorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePredictorCommandInput = CreatePredictorRequest;
export declare type CreatePredictorCommandOutput = CreatePredictorResponse & __MetadataBearer;
export declare class CreatePredictorCommand extends $Command<CreatePredictorCommandInput, CreatePredictorCommandOutput, forecastClientResolvedConfig> {
    readonly input: CreatePredictorCommandInput;
    constructor(input: CreatePredictorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePredictorCommandInput, CreatePredictorCommandOutput>;
    private serialize;
    private deserialize;
}
