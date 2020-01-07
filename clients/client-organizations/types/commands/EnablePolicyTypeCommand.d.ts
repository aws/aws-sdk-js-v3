import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnablePolicyTypeRequest, EnablePolicyTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnablePolicyTypeCommandInput = EnablePolicyTypeRequest;
export declare type EnablePolicyTypeCommandOutput = EnablePolicyTypeResponse & __MetadataBearer;
export declare class EnablePolicyTypeCommand extends $Command<EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: EnablePolicyTypeCommandInput;
    constructor(input: EnablePolicyTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput>;
    private serialize;
    private deserialize;
}
