import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, CreateConnectionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConnectionCommandInput = CreateConnectionRequest;
export declare type CreateConnectionCommandOutput = Connection & __MetadataBearer;
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
