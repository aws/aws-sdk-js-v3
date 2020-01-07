import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RegisterActivityTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterActivityTypeCommandInput = RegisterActivityTypeInput;
export declare type RegisterActivityTypeCommandOutput = __MetadataBearer;
export declare class RegisterActivityTypeCommand extends $Command<RegisterActivityTypeCommandInput, RegisterActivityTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: RegisterActivityTypeCommandInput;
    constructor(input: RegisterActivityTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterActivityTypeCommandInput, RegisterActivityTypeCommandOutput>;
    private serialize;
    private deserialize;
}
