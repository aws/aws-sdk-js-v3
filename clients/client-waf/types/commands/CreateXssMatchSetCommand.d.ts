import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateXssMatchSetRequest, CreateXssMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateXssMatchSetCommandInput = CreateXssMatchSetRequest;
export declare type CreateXssMatchSetCommandOutput = CreateXssMatchSetResponse & __MetadataBearer;
export declare class CreateXssMatchSetCommand extends $Command<CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateXssMatchSetCommandInput;
    constructor(input: CreateXssMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
