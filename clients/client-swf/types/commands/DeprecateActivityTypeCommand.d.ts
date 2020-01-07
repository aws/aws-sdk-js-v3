import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DeprecateActivityTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprecateActivityTypeCommandInput = DeprecateActivityTypeInput;
export declare type DeprecateActivityTypeCommandOutput = __MetadataBearer;
export declare class DeprecateActivityTypeCommand extends $Command<DeprecateActivityTypeCommandInput, DeprecateActivityTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: DeprecateActivityTypeCommandInput;
    constructor(input: DeprecateActivityTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateActivityTypeCommandInput, DeprecateActivityTypeCommandOutput>;
    private serialize;
    private deserialize;
}
