import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeleteNamedQueryInput, DeleteNamedQueryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNamedQueryCommandInput = DeleteNamedQueryInput;
export declare type DeleteNamedQueryCommandOutput = DeleteNamedQueryOutput & __MetadataBearer;
export declare class DeleteNamedQueryCommand extends $Command<DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput, AthenaClientResolvedConfig> {
    readonly input: DeleteNamedQueryCommandInput;
    constructor(input: DeleteNamedQueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput>;
    private serialize;
    private deserialize;
}
