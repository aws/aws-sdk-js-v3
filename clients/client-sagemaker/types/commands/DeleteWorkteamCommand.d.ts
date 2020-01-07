import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteWorkteamRequest, DeleteWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWorkteamCommandInput = DeleteWorkteamRequest;
export declare type DeleteWorkteamCommandOutput = DeleteWorkteamResponse & __MetadataBearer;
export declare class DeleteWorkteamCommand extends $Command<DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteWorkteamCommandInput;
    constructor(input: DeleteWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
