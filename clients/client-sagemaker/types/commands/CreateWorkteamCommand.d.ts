import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateWorkteamRequest, CreateWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWorkteamCommandInput = CreateWorkteamRequest;
export declare type CreateWorkteamCommandOutput = CreateWorkteamResponse & __MetadataBearer;
export declare class CreateWorkteamCommand extends $Command<CreateWorkteamCommandInput, CreateWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateWorkteamCommandInput;
    constructor(input: CreateWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkteamCommandInput, CreateWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
