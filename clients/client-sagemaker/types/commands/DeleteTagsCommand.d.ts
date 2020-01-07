import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTagsInput, DeleteTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagsCommandInput = DeleteTagsInput;
export declare type DeleteTagsCommandOutput = DeleteTagsOutput & __MetadataBearer;
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
