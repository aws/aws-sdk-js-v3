import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyEventSubscriptionCommandInput = ModifyEventSubscriptionMessage;
export declare type ModifyEventSubscriptionCommandOutput = ModifyEventSubscriptionResult & __MetadataBearer;
export declare class ModifyEventSubscriptionCommand extends $Command<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ModifyEventSubscriptionCommandInput;
    constructor(input: ModifyEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
