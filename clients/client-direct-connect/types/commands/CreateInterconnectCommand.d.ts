import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateInterconnectRequest, Interconnect } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInterconnectCommandInput = CreateInterconnectRequest;
export declare type CreateInterconnectCommandOutput = Interconnect & __MetadataBearer;
export declare class CreateInterconnectCommand extends $Command<CreateInterconnectCommandInput, CreateInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateInterconnectCommandInput;
    constructor(input: CreateInterconnectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInterconnectCommandInput, CreateInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
