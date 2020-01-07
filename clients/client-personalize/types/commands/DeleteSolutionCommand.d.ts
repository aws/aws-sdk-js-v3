import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteSolutionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSolutionCommandInput = DeleteSolutionRequest;
export declare type DeleteSolutionCommandOutput = __MetadataBearer;
export declare class DeleteSolutionCommand extends $Command<DeleteSolutionCommandInput, DeleteSolutionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteSolutionCommandInput;
    constructor(input: DeleteSolutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSolutionCommandInput, DeleteSolutionCommandOutput>;
    private serialize;
    private deserialize;
}
