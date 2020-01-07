import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteInstanceRequest, DeleteInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInstanceCommandInput = DeleteInstanceRequest;
export declare type DeleteInstanceCommandOutput = DeleteInstanceResult & __MetadataBearer;
export declare class DeleteInstanceCommand extends $Command<DeleteInstanceCommandInput, DeleteInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteInstanceCommandInput;
    constructor(input: DeleteInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceCommandInput, DeleteInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
