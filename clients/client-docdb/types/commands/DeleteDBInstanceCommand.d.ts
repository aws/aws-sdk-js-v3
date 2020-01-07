import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBInstanceCommandInput = DeleteDBInstanceMessage;
export declare type DeleteDBInstanceCommandOutput = DeleteDBInstanceResult & __MetadataBearer;
export declare class DeleteDBInstanceCommand extends $Command<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DeleteDBInstanceCommandInput;
    constructor(input: DeleteDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
