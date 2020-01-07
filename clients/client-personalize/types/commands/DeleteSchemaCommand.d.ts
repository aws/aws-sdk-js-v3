import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteSchemaRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSchemaCommandInput = DeleteSchemaRequest;
export declare type DeleteSchemaCommandOutput = __MetadataBearer;
export declare class DeleteSchemaCommand extends $Command<DeleteSchemaCommandInput, DeleteSchemaCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteSchemaCommandInput;
    constructor(input: DeleteSchemaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSchemaCommandInput, DeleteSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
