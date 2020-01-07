import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateHumanTaskUiRequest, CreateHumanTaskUiResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHumanTaskUiCommandInput = CreateHumanTaskUiRequest;
export declare type CreateHumanTaskUiCommandOutput = CreateHumanTaskUiResponse & __MetadataBearer;
export declare class CreateHumanTaskUiCommand extends $Command<CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateHumanTaskUiCommandInput;
    constructor(input: CreateHumanTaskUiCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput>;
    private serialize;
    private deserialize;
}
