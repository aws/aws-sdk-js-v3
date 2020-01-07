import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateWorkteamRequest, UpdateWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWorkteamCommandInput = UpdateWorkteamRequest;
export declare type UpdateWorkteamCommandOutput = UpdateWorkteamResponse & __MetadataBearer;
export declare class UpdateWorkteamCommand extends $Command<UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateWorkteamCommandInput;
    constructor(input: UpdateWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
