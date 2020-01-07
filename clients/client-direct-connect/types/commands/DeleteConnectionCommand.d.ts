import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, DeleteConnectionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConnectionCommandInput = DeleteConnectionRequest;
export declare type DeleteConnectionCommandOutput = Connection & __MetadataBearer;
export declare class DeleteConnectionCommand extends $Command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteConnectionCommandInput;
    constructor(input: DeleteConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
