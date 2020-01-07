import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBSubnetGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBSubnetGroupCommandInput = DeleteDBSubnetGroupMessage;
export declare type DeleteDBSubnetGroupCommandOutput = __MetadataBearer;
export declare class DeleteDBSubnetGroupCommand extends $Command<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBSubnetGroupCommandInput;
    constructor(input: DeleteDBSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
