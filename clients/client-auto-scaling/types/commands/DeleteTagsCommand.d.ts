import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteTagsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagsCommandInput = DeleteTagsType;
export declare type DeleteTagsCommandOutput = __MetadataBearer;
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
