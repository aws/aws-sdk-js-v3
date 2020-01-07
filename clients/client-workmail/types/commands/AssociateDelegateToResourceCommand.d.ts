import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDelegateToResourceCommandInput = AssociateDelegateToResourceRequest;
export declare type AssociateDelegateToResourceCommandOutput = AssociateDelegateToResourceResponse & __MetadataBearer;
export declare class AssociateDelegateToResourceCommand extends $Command<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: AssociateDelegateToResourceCommandInput;
    constructor(input: AssociateDelegateToResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
