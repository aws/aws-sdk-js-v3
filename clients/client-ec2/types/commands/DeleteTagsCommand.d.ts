import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTagsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagsCommandInput = DeleteTagsRequest;
export declare type DeleteTagsCommandOutput = __MetadataBearer;
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
