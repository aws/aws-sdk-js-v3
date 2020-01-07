import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteScheduledActionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScheduledActionCommandInput = DeleteScheduledActionMessage;
export declare type DeleteScheduledActionCommandOutput = __MetadataBearer;
export declare class DeleteScheduledActionCommand extends $Command<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteScheduledActionCommandInput;
    constructor(input: DeleteScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
