import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteVerifiedEmailAddressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVerifiedEmailAddressCommandInput = DeleteVerifiedEmailAddressRequest;
export declare type DeleteVerifiedEmailAddressCommandOutput = __MetadataBearer;
export declare class DeleteVerifiedEmailAddressCommand extends $Command<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteVerifiedEmailAddressCommandInput;
    constructor(input: DeleteVerifiedEmailAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput>;
    private serialize;
    private deserialize;
}
