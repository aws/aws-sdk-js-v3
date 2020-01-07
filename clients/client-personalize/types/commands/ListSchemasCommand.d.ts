import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSchemasRequest, ListSchemasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSchemasCommandInput = ListSchemasRequest;
export declare type ListSchemasCommandOutput = ListSchemasResponse & __MetadataBearer;
export declare class ListSchemasCommand extends $Command<ListSchemasCommandInput, ListSchemasCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSchemasCommandInput;
    constructor(input: ListSchemasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchemasCommandInput, ListSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
