import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { DeleteTerminologyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTerminologyCommandInput = DeleteTerminologyRequest;
export declare type DeleteTerminologyCommandOutput = __MetadataBearer;
export declare class DeleteTerminologyCommand extends $Command<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput, TranslateClientResolvedConfig> {
    readonly input: DeleteTerminologyCommandInput;
    constructor(input: DeleteTerminologyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput>;
    private serialize;
    private deserialize;
}
