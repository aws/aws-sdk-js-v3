import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { UndeprecateActivityTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UndeprecateActivityTypeCommandInput = UndeprecateActivityTypeInput;
export declare type UndeprecateActivityTypeCommandOutput = __MetadataBearer;
export declare class UndeprecateActivityTypeCommand extends $Command<UndeprecateActivityTypeCommandInput, UndeprecateActivityTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: UndeprecateActivityTypeCommandInput;
    constructor(input: UndeprecateActivityTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UndeprecateActivityTypeCommandInput, UndeprecateActivityTypeCommandOutput>;
    private serialize;
    private deserialize;
}
