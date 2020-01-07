import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateRoomRequest, CreateRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRoomCommandInput = CreateRoomRequest;
export declare type CreateRoomCommandOutput = CreateRoomResponse & __MetadataBearer;
export declare class CreateRoomCommand extends $Command<CreateRoomCommandInput, CreateRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateRoomCommandInput;
    constructor(input: CreateRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRoomCommandInput, CreateRoomCommandOutput>;
    private serialize;
    private deserialize;
}
