import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteOptionGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOptionGroupCommandInput = DeleteOptionGroupMessage;
export declare type DeleteOptionGroupCommandOutput = __MetadataBearer;
export declare class DeleteOptionGroupCommand extends $Command<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteOptionGroupCommandInput;
    constructor(input: DeleteOptionGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
