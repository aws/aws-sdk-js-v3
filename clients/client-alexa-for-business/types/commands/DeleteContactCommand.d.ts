import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteContactRequest, DeleteContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteContactCommandInput = DeleteContactRequest;
export declare type DeleteContactCommandOutput = DeleteContactResponse & __MetadataBearer;
export declare class DeleteContactCommand extends $Command<DeleteContactCommandInput, DeleteContactCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteContactCommandInput;
    constructor(input: DeleteContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContactCommandInput, DeleteContactCommandOutput>;
    private serialize;
    private deserialize;
}
