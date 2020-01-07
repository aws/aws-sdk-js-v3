import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AcceptReservedNodeExchangeInputMessage, AcceptReservedNodeExchangeOutputMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptReservedNodeExchangeCommandInput = AcceptReservedNodeExchangeInputMessage;
export declare type AcceptReservedNodeExchangeCommandOutput = AcceptReservedNodeExchangeOutputMessage & __MetadataBearer;
export declare class AcceptReservedNodeExchangeCommand extends $Command<AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: AcceptReservedNodeExchangeCommandInput;
    constructor(input: AcceptReservedNodeExchangeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput>;
    private serialize;
    private deserialize;
}
