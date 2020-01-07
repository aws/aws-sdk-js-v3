import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteRoomRequest, DeleteRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRoomCommandInput = DeleteRoomRequest;
export declare type DeleteRoomCommandOutput = DeleteRoomResponse & __MetadataBearer;
export declare class DeleteRoomCommand extends $Command<DeleteRoomCommandInput, DeleteRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteRoomCommandInput;
    constructor(input: DeleteRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRoomCommandInput, DeleteRoomCommandOutput>;
    private serialize;
    private deserialize;
}
