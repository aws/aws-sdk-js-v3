import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { SetTagsForResourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTagsForResourceCommandInput = SetTagsForResourceRequest;
export declare type SetTagsForResourceCommandOutput = __MetadataBearer;
export declare class SetTagsForResourceCommand extends $Command<SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput, InspectorClientResolvedConfig> {
    readonly input: SetTagsForResourceCommandInput;
    constructor(input: SetTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
