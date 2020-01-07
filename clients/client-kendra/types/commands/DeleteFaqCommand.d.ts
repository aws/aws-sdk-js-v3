import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { DeleteFaqRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFaqCommandInput = DeleteFaqRequest;
export declare type DeleteFaqCommandOutput = __MetadataBearer;
export declare class DeleteFaqCommand extends $Command<DeleteFaqCommandInput, DeleteFaqCommandOutput, kendraClientResolvedConfig> {
    readonly input: DeleteFaqCommandInput;
    constructor(input: DeleteFaqCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFaqCommandInput, DeleteFaqCommandOutput>;
    private serialize;
    private deserialize;
}
