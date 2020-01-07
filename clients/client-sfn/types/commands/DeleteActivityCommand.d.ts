import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteActivityCommandInput = DeleteActivityInput;
export declare type DeleteActivityCommandOutput = DeleteActivityOutput & __MetadataBearer;
export declare class DeleteActivityCommand extends $Command<DeleteActivityCommandInput, DeleteActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: DeleteActivityCommandInput;
    constructor(input: DeleteActivityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActivityCommandInput, DeleteActivityCommandOutput>;
    private serialize;
    private deserialize;
}
