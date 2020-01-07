import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetContactRequest, GetContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContactCommandInput = GetContactRequest;
export declare type GetContactCommandOutput = GetContactResponse & __MetadataBearer;
export declare class GetContactCommand extends $Command<GetContactCommandInput, GetContactCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetContactCommandInput;
    constructor(input: GetContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactCommandInput, GetContactCommandOutput>;
    private serialize;
    private deserialize;
}
