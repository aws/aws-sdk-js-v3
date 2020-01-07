import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ResolveRoomRequest, ResolveRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResolveRoomCommandInput = ResolveRoomRequest;
export declare type ResolveRoomCommandOutput = ResolveRoomResponse & __MetadataBearer;
export declare class ResolveRoomCommand extends $Command<ResolveRoomCommandInput, ResolveRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ResolveRoomCommandInput;
    constructor(input: ResolveRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveRoomCommandInput, ResolveRoomCommandOutput>;
    private serialize;
    private deserialize;
}
