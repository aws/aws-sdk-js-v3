import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateXssMatchSetRequest, UpdateXssMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateXssMatchSetCommandInput = UpdateXssMatchSetRequest;
export declare type UpdateXssMatchSetCommandOutput = UpdateXssMatchSetResponse & __MetadataBearer;
export declare class UpdateXssMatchSetCommand extends $Command<UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateXssMatchSetCommandInput;
    constructor(input: UpdateXssMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
