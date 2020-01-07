import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateLagRequest, Lag } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLagCommandInput = CreateLagRequest;
export declare type CreateLagCommandOutput = Lag & __MetadataBearer;
export declare class CreateLagCommand extends $Command<CreateLagCommandInput, CreateLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateLagCommandInput;
    constructor(input: CreateLagCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLagCommandInput, CreateLagCommandOutput>;
    private serialize;
    private deserialize;
}
