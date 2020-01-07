import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateContactRequest, UpdateContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateContactCommandInput = UpdateContactRequest;
export declare type UpdateContactCommandOutput = UpdateContactResponse & __MetadataBearer;
export declare class UpdateContactCommand extends $Command<UpdateContactCommandInput, UpdateContactCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateContactCommandInput;
    constructor(input: UpdateContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContactCommandInput, UpdateContactCommandOutput>;
    private serialize;
    private deserialize;
}
